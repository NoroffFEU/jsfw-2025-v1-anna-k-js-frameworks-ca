'use client'

import { useToast } from '@/context/ToastContext'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react'

function ToastIcon({ type }: { type?: 'success' | 'error' | 'info' }) {
  if (type === 'success') return <CheckCircle size={18} className="text-green-600" />
  if (type === 'error') return <AlertCircle size={18} className="text-red-600" />
  return <Info size={18} className="text-blue-600" />
}

function getToastStyle(type?: 'success' | 'error' | 'info') {
  if (type === 'success') return 'border-green-200 bg-green-50'
  if (type === 'error') return 'border-red-200 bg-red-50'
  return 'border-blue-200 bg-blue-50'
}

export default function ToastViewport() {
  const { toasts, removeToast } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex w-[min(360px,calc(100vw-2rem))] flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-xl border p-3 shadow-lg ${getToastStyle(toast.type)}`}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2">
              <ToastIcon type={toast.type} />
              <p className="text-sm text-gray-900">{toast.message}</p>
            </div>

            <button
              type="button"
              onClick={() => removeToast(toast.id)}
              className="text-gray-600 hover:text-gray-900 transition"
              aria-label="Close toast"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}