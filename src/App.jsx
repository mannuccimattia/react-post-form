import React from 'react'

const App = () => {
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
              <form action="">

                <div>
                  <label htmlFor="">Author</label>
                  <input
                    type="text"
                    name='author'
                    required
                  />
                </div>

                <div>
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    name='title'
                    required
                  />
                </div>

                <div>
                  <label htmlFor="">Text</label>
                  <textarea
                    name='description'
                    required
                  />
                </div>

                <div>
                  <input
                    type="checkbox"
                    name='public'
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
