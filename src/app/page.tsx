'use client'
import api from '@/api'
import { Footer } from '@/components/footer'
import { Genrer } from '@/components/genrer'
import { Header } from '@/components/header'
import { Loading } from '@/components/loading'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { IoIosStarOutline } from 'react-icons/io'

export default function Home() {
  const [base, setBase] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(2)
  const [loading, setLoading] = useState<Boolean>(true)
  const [genrer, setGenrer] = useState<any[]>([])

  useEffect(() => {
    async function getBase() {
      const res = await api.get('discover/movie', {
        params: {
          sort_by: 'popularity.desc',
          page: currentPage,
        },
      })
      setBase(res.data.results)
      setTotalPages(res.data.total_pages)
      setLoading(false)
    }
    getBase()
  }, [currentPage])

  useEffect(() => {
    async function getGenrerBase() {
      const genrerRes = await api.get('genre/movie/list')
      setGenrer(genrerRes.data.genres)
    }
    getGenrerBase()
  }, [])

  return (
    <div className="flex h-full min-h-screen flex-col items-center gap-7 bg-neutral-900 py-8 text-neutral-200">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />

      <div className="flex flex-wrap justify-center gap-8">
        {loading ? (
          <Loading />
        ) : (
          base?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="flex h-80 w-[590px] flex-col gap-4 rounded-lg bg-neutral-950 sm:flex-row"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  className="w-48 rounded-s-lg sm:h-80"
                  alt={item.original_title}
                />
                <div className="flex w-96 flex-col gap-4 p-3 text-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-xl font-bold">{item.original_title}</p>

                    <div className="flex flex-row items-center justify-center gap-2">
                      <IoIosStarOutline />
                      <p>{item.vote_average} / 10</p>
                    </div>
                  </div>
                  <div className="flex w-80 items-center gap-3 overflow-x-auto overflow-y-hidden p-3">
                    <p className="whitespace-nowrap text-center text-sm font-normal text-neutral-500">
                      {moment(item.release_date).format('DD, MMM - YYYY')}
                    </p>
                    {item.genre_ids.map((genreId: any) => (
                      <Genrer
                        key={`${item.original_title}.${genreId}`}
                        genrer={
                          genrer.find((genre) => genre.id === genreId)?.name
                        }
                      />
                    ))}
                  </div>
                  <p className="h-32 w-80 overflow-x-hidden overflow-y-scroll text-start text-sm">
                    {item.overview}
                  </p>
                </div>
              </div>
            )
          })
        )}
      </div>
      <Footer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  )
}
