import { useEffect, useRef } from 'react'
import { clsx } from 'clsx'

export default function Modal({ isModalOpen, setIsModalOpen, modalTest }: any) {
  const modalRef = useRef(null)

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      e.key === 'Escape' && setIsModalOpen(false)
    })

    document.addEventListener(
      'click',
      (e) => {
        if (!modalRef.current) {
          return
        }

        !modalRef.current.contains(e.target) && setIsModalOpen(false)
      },
      true,
    )

    return () => {
      document.removeEventListener('keydown', () => {})
      document.removeEventListener('click', () => {})
    }
  }, [])

  return (
    <dialog
      className={clsx(
        'fixed inset-0 z-10 m-0 flex items-center justify-center bg-transparent p-0',
        isModalOpen ? 'visible' : 'invisible',
      )}
    >
      <div
        className={clsx(
          'inset-0 h-screen w-screen bg-[#393939]/[21%] backdrop-blur transition-opacity duration-100',
          isModalOpen ? 'opacity-100' : 'opacity-0',
        )}
      ></div>
      <div
        ref={modalRef}
        className={clsx(
          'duration-400 fixed flex max-w-[450px]  flex-col rounded-lg bg-white p-16 transition-all delay-150',
          isModalOpen ? 'opacity-100' : 'opacity-0 !delay-0',
        )}
      >
        <CloseButton setIsModalOpen={setIsModalOpen} />
        <p className="text-center font-body text-3xl font-bold text-black">
          {modalTest ? 'this is a modal test!' : 'Sign with your wallet!'}
        </p>
        <p className="texto-black mx-auto mt-4 w-11/12 font-body text-xs">
          Sign Wallet NFT, the secure digital storage for unique assets, take a
          step towards the future
        </p>
      </div>
    </dialog>
  )
}

function CloseButton({ setIsModalOpen }: any) {
  return (
    <button
      className="absolute right-0 top-0 translate-y-[calc(-100%-17px)]"
      onClick={() => setIsModalOpen(false)}
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.414 12.0002L18.707 6.70725C19.098 6.31625 19.098 5.68425 18.707 5.29325C18.316 4.90225 17.684 4.90225 17.293 5.29325L12 10.5862L6.70701 5.29325C6.31601 4.90225 5.68401 4.90225 5.29301 5.29325C4.90201 5.68425 4.90201 6.31625 5.29301 6.70725L10.586 12.0002L5.29301 17.2933C4.90201 17.6842 4.90201 18.3162 5.29301 18.7072C5.48801 18.9022 5.74401 19.0002 6.00001 19.0002C6.25601 19.0002 6.51201 18.9022 6.70701 18.7072L12 13.4143L17.293 18.7072C17.488 18.9022 17.744 19.0002 18 19.0002C18.256 19.0002 18.512 18.9022 18.707 18.7072C19.098 18.3162 19.098 17.6842 18.707 17.2933L13.414 12.0002Z"
          fill="#ffffff"
        />
      </svg>
    </button>
  )
}
