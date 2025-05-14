import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData).then(res => {
      console.log(res.data)
    })
  }

  return (
    <>
      <header>
        <div className="container-fluid bg-secondary text-center p-3">
          <h1>React Form</h1>
        </div>
      </header>

      <main>
        <div className="container text-center my-5">
          <div className="row d-flex">
            <div className="col-12">
              <form action="" onSubmit={handleSubmit}>

                {/* Author */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingAuthor"
                    placeholder="Author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingAuthor">Author:</label>
                </div>

                {/* Title */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingTitle"
                    placeholder="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingTitle">Title:</label>
                </div>

                {/* Body */}
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="floatingBody"
                    placeholder="Body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingBody">Body:</label>
                </div>

                {/* Public */}
                <div className="input-group-text mb-3 d-inline-block m-auto">
                  <input
                    type="checkbox"
                    className='me-2'
                    name="public"
                    value={formData.public}
                    onChange={handleChange}
                  /> Public
                </div>

                {/* Button */}
                <div>
                  <button
                    type='submit'
                    className='btn btn-primary'
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
