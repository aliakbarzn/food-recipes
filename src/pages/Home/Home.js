
import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

const Home = () => {

    const { data, isLoading, error } = useFetch('http://localhost:3000/recipes')

    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}

export default Home