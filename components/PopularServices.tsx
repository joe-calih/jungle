'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Service {
  title: string
  color: string
  bgColor: string
  imageUrl: string
}

export default function Component() {
  const [currentPage, setCurrentPage] = useState(0)

  const servicesList: Service[][] = [
    [
      {
        title: "Website Development",
        color: "rgb(0, 112, 48)",
        bgColor: "rgb(204, 255, 231)",
        imageUrl: "/placeholder.svg?height=160&width=160"
      },
      {
        title: "Logo Design",
        color: "rgb(255, 122, 73)",
        bgColor: "rgb(255, 228, 214)",
        imageUrl: "/placeholder.svg?height=160&width=160"
      },
      {
        title: "SEO",
        color: "rgb(0, 53, 22)",
        bgColor: "rgb(204, 255, 231)",
        imageUrl: "/placeholder.svg?height=160&width=160"
      },
      {
        title: "Architecture & Interior Design",
        color: "rgb(89, 19, 42)",
        bgColor: "rgb(255, 214, 229)",
        imageUrl: "/placeholder.svg?height=160&width=160"
      },
      {
        title: "Social Media Marketing",
        color: "rgb(82, 89, 0)",
        bgColor: "rgb(238, 255, 204)",
        imageUrl: "/placeholder.svg?height=160&width=160"
      },
      {
        title: "Voice Over",
        color: "rgb(89, 28, 0)",
        bgColor: "rgb(255, 214, 204)",
        imageUrl: "/placeholder.svg?height=160&width=160"
      }
    ],
    [
      {
        title: "UGC Videos",
        color: "rgb(205, 92, 120)",
        bgColor: "rgb(249, 204, 216)",
        imageUrl: "/placeholder.svg?height=160&width=160"
      },
      {
        title: "Software Development",
        color: "rgb(47, 72, 11)",
        bgColor: "rgb(205, 211, 154)",
        imageUrl: "/placeholder.svg?height=160&width=160"
      },
      {
        title: "Data Science & ML",
        color: "rgb(153, 51, 0)",
        bgColor: "rgb(255, 204, 153)",
        imageUrl: "/placeholder.svg?height=160&width=160"
      },
      {
        title: "Product Photography",
        color: "rgb(108, 122, 0)",
        bgColor: "rgb(214, 224, 170)",
        imageUrl: "/placeholder.svg?height=160&width=160"
      },
      {
        title: "E-Commerce Marketing",
        color: "rgb(0, 102, 51)",
        bgColor: "rgb(179, 230, 204)",
        imageUrl: "/placeholder.svg?height=160&width=160"
      },
      {
        title: "Video Editing",
        color: "rgb(205, 92, 120)",
        bgColor: "rgb(249, 204, 216)",
        imageUrl: "/placeholder.svg?height=160&width=160"
      }
    ]
  ]

  const handlePageChange = (direction: number) => {
    setCurrentPage((prev) => (prev + direction + servicesList.length) % servicesList.length)
  }

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-[1250px] px-4">
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              initial={false}
              animate={{ x: `${-currentPage * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {servicesList.map((services, pageIndex) => (
                <div key={pageIndex} className="min-w-full grid grid-cols-6 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="rounded-2xl overflow-hidden"
                      style={{ backgroundColor: service.color }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className="p-4 h-[220px] flex flex-col">
                        <h3 className="mb-2 text-lg font-medium text-white leading-tight h-[50px] overflow-hidden">
                          {service.title}
                        </h3>
                        <div
                          className="mt-auto rounded-xl overflow-hidden flex items-center justify-center"
                          style={{ backgroundColor: service.bgColor }}
                        >
                          <img
                            src={service.imageUrl}
                            alt={service.title}
                            className="w-full h-[140px] object-cover p-2"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
          <button
            onClick={() => handlePageChange(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white p-2 shadow-lg z-10"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={() => handlePageChange(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white p-2 shadow-lg z-10"
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}