const React = require('react')
const Def = require('../default')

function show (data) {
  let comments =(
    <h3 className="inactive">
    No comments yet!
    </h3>
  )
 if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
        
      ) 
    })
  }
    return (
        <Def>
          <main>
          <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt={data.place.name} />
            <h2>
              Description
            </h2>
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <h2>Ratings</h2>
            <p>currently unrated</p>
            <div className='row'>
            <h2>Comments</h2>
            {comments}
            </div>
            
<a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
             Edit
            </a>     
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
            Delete
            </button>
            </form>   
            <hr></hr>
      <h1>Add a Comment Below</h1>
  <form method="POST" action={`/places/${data.place.id}/comments`}>
 
      <div className="form-row justify-content-center">
          <label htmlFor="author">Author</label>
           <input className="form-control" id="author" name="author"/>
      </div>
    

      <div className="form-row justify-content-center">
          <label htmlFor="content">Content</label>
          <textarea className="form-control" id="content" name="content" rows="4" cols="50"></textarea>
      </div>
    

      <div className="form-row justify-content-center">
          <label htmlFor="stars">Star Rating</label>
           <input type="number" value="0" id="stars" name="stars" step="0.5" min="1" max="5"/>
          </div>
        
        <div className="form-row justify-content-center">
          <label htmlFor="range">Star Rating(Between 1 and 5)</label>
           <input type="range"  id="range" name="range" min="1" max="5"/>
          </div>
      <div className="form-row justify-content-center">
          <label htmlFor="rant">Rant</label>
           <input type="checkbox" id="rant" name="rant" value="true"></input>
          <label for="true">True</label>
          <input type="checkbox" id="rant" name="rant" value="false"></input>
           <label for="false">False</label>  
      </div>
      <input type="submit" value="Submit"></input>
  </form>   
          </main>
        </Def>
    )
}

module.exports = show























  
 