import React from 'react'
import { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
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

    console.log(formData)
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
          <div className="row">
            <div className="col-12">
              <form action="" onSubmit={handleSubmit}>

                <div>
                  <label htmlFor="">Author</label>
                  <input
                    type="text"
                    name='author'
                    value={formData.author}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="">Text</label>
                  <textarea
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <input
                    type="checkbox"
                    name='public'
                    value={formData.public}
                    onChange={handleChange}
                  /> Public
                </div>

                <button type='submit'>Send</button>

              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
