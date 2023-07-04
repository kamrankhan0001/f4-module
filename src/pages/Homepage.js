import Card from "../components/Card";


const HomePage = ({data}) => {
    return(
        <div className="post-grid">
        {data.map((post) => {
          return <Card post={post}></Card>
        })}
      </div>
    )

}

export default HomePage;