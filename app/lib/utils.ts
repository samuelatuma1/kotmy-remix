import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function normalizePhoneNumber(value: string) {
  return value.trim().replace(/\s+/g, "")
}

export function isValidNigerianPhoneNumber(phoneNumber: string) {
  return /^(0\d{10}|234\d{10})$/.test(phoneNumber)
}

export function getErrorMessage(error: unknown, fallback = "An error occurred.") {
  if (typeof error === "string") return error

  if (error && typeof error === "object" && "detail" in error) {
    const detail = (error as { detail?: unknown }).detail
    if (typeof detail === "string") return detail
  }

  return fallback
}

export function formatAmount(amount?: number) {
  return typeof amount === "number" ? amount.toLocaleString() : "—"
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}
