'use client'
import { useState, useEffect, useCallback } from 'react'
import { fetchAPI } from '../../utils/fetch-api'

import Loader from '../../components/Loader'
import SingleNFT from './SingleNFT'

interface Meta {
  pagination: {
    start: number
    limit: number
    total: number
  }
}

export default function ExploreNFT({ dataStatic }: any) {
  const [meta, setMeta] = useState<Meta | undefined>()
  const [data, setData] = useState<any>([])
  const [isLoading, setLoading] = useState(true)

  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true)
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
      const path = `/nfts` //articles -> nfts
      const urlParamsObject = {
        sort: { createdAt: 'desc' },
        populate: {
          fields: ['heading', 'date', 'description', 'bid'],
          creator: { populate: '*' },
          picture: {
            fields: ['url', 'alternativeText', 'caption', 'width', 'height'],
          },
          profilePicture: {
            fields: ['url', 'alternativeText', 'caption', 'width', 'height'],
          },
        },
        pagination: {
          start: start,
          limit: limit,
        },
      }
      const options = { headers: { Authorization: `Bearer ${token}` } }
      const responseData = await fetchAPI(path, urlParamsObject, options)

      if (start === 0) {
        setData(responseData.data)
      } else {
        setData((prevData: any[]) => [...prevData, ...responseData.data])
      }

      setMeta(responseData.meta)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])

  function loadMorePosts(): void {
    const nextPosts = meta!.pagination.start + meta!.pagination.limit
    fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT))
  }

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT))
  }, [fetchData])

  isLoading && <Loader />

  return (
    <section id="explore" className="container mx-auto px-6 sm:px-0">
      <h2 className="font-body text-2xl font-bold text-black md:text-4xl">
        {dataStatic.heading}
      </h2>
      <SingleNFT data={data} />
      {meta?.pagination &&
        meta!.pagination.start + meta!.pagination.limit <
          meta!.pagination.total && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="flex w-fit items-center gap-4 rounded-[1.25rem] border border-black bg-white px-8 py-4 font-body font-bold text-black md:px-14"
              onClick={loadMorePosts}
            >
              Load More NFTs
            </button>
          </div>
        )}
    </section>
  )
}
