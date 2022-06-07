import { useState, useEffect, useRef } from 'react'
import axios from "axios";

const Home = () => {
  const scrollBox = useRef()
  const [items, setItems] = useState([])
  const [uri, setUri] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
  const [isFetching, setIsFetching] = useState(false)
  const [limit, setLimit] = useState(0)
  const [enableFetch, setEnableFetch] = useState(true)

  useEffect(() => {
    if (items.length === 0) {
      axios.get(uri).then((res) => {
        setItems(res.data.results)
        setUri(res.data.next)
        setLimit(res.data.count)
        scrollBox.current.addEventListener('scroll', isScrolling)
      })
    }
  }, [items])

  useEffect(() => {
    if (isFetching && enableFetch) {
      axios.get(uri).then((res) => {
        setItems(items => [...items, ...res.data.results])
        setUri(res.data.next)

        if (items.length >= limit) {
          setEnableFetch(false)
        }
        setIsFetching(false)
      })
    }
  }, [isFetching, enableFetch])

  const isScrolling = (e: { target: any; }) => {
    const element = e.target

    if (enableFetch && Math.ceil(element.scrollHeight) - Math.ceil(element.scrollTop) === Math.ceil(element.clientHeight)) {
      setIsFetching(true)
    }
  }

  const Image = ({ name, url }: { name: string, url: string }) => {
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

    return (
      <div className="flex-shrink-0 hidden ml-3 sm:block">
        <img
          className="object-cover w-16 h-16 rounded-lg shadow-sm"
          src={imageUrl}
          alt={name}
        />
      </div>
    )
  }

  return (
    <main>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://cdn.lorem.space/images/hotel/.cache/500x180/man-pan-KTSYy-3XVSo-unsplash.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">Welcome</h1>
                <p className="mt-4 text-lg text-white">
                  Example for Infinity scroll
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative block bg-neutral-700">
        <div className="max-w-screen-md px-4 py-12 pb-16 mx-auto max-h-screen text-center">
          <h2 className='text-white text-xl pb-8'>Pokémon</h2>
          <div className="text-center mb-1 pb-1 border-bottom px-1 mb-20 bg-white h-80 max-h-80 overflow-y-auto" ref={scrollBox}>
            {
              items && items.map((item: object, i: number) => {
                return (
                  <div className="flex justify-start py-3" key={i}>
                    <Image {...item} />
                    <div className="pl-4">
                      <h5 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h5>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
