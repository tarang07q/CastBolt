"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react'
import FormField from '@/components/FormField'
import FileInput from '@/components/FileInput'

const Page = () => {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<VideoFormValues>({
    title: "",
    description: "",
    tags: "",
    visibility: "public",
  });

  const video: any = {};       // Placeholder for video state
  const thumbnail: any = {};   // Placeholder for thumbnail state

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (!formData.title || !formData.description) {
        setError("Please fill in all required fields.");
        return;
      }
      if (!video.file || !thumbnail.file) {
        setError("Please upload video and thumbnail files.");
        return;
      }
        // Upload the video to Bunny
        // Upload the thumbnail to DB
        // Attach thumbnail
        // Create a new DB entry for the video details
        // Add upload logic here
    } catch (err) {
      console.log("An error occurred during upload.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="wrapper-md upload-page">
      <h1>Upload a video</h1>
      {error && <div className="error-field">{error}</div>}
      <form
        className="rounded-20 gap-6 w-full flex flex-col shadow-10 px-5 py-7.5"
        onSubmit={handleSubmit}
      >
        <FormField
          id="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter a clear and concise video title"
        />
        <FormField
          id="description"
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Briefly describe what this video is about"
          as="textarea"
        />

        <FileInput
          id="thumbnail"
          label="Thumbnail"
          accept="image/*"
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type="image"
        />

        <FileInput
          id="video"
          label="Video"
          accept="video/*"
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type="video"
        />

        <FormField
          id="visibility"
          label="Visibility"
          value={formData.visibility}
          onChange={handleInputChange}
          as="select"
          options={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
          ]}
        />

        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? "Uploading..." : "Upload Video"}
        </button>
      </form>
    </main>
  );
};

export default Page;
