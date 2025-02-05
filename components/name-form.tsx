"use client"

import { useState } from "react"
import { submitName } from "@/app/actions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function NameForm() {
  const [greeting, setGreeting] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [isEditing, setIsEditing] = useState<boolean>(false)

  async function handleSubmit(formData: FormData) {
    const result = await submitName(formData)
    setGreeting(result)
    setName(formData.get("name") as string)
    setIsEditing(false)
  }

  function handleEdit() {
    setIsEditing(true)
    setGreeting("")
  }

  return (
    <div className="mb-8">
      <form action={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="flex-grow"
          defaultValue={isEditing ? name : ""}
        />
        <Button type="submit">{isEditing ? "Update" : "Submit"}</Button>
      </form>
      {greeting && !isEditing && (
        <div className="mt-4">
          <p className="text-lg font-semibold">{greeting}</p>
          <Button onClick={handleEdit} variant="outline" className="mt-2">
            Edit
          </Button>
        </div>
      )}
    </div>
  )
}

