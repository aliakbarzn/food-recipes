
import { useEffect, useState } from 'react'
import './Create.css'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredient] = useState([])

    const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')

    const navigate = useNavigate() 

    const handleSubmit = (e) => {
        e.preventDefault()
        postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
    }

    const handleAdd = (e) => {
        e.preventDefault()
        if (newIngredient && !ingredients.includes(newIngredient)) {
            setIngredient(prevIngredients => [...prevIngredients, newIngredient])
        }
        setNewIngredient('')
    }

    useEffect(() => {
        if (data) {
            navigate('/')            
        }
    }, [data])

    return (
        <div className='create'>
            <h2 className='page-title'>add a new recipe</h2>

            <form onSubmit={handleSubmit}>

                <label>
                    <span>recipe title: </span>
                    <input
                        type='text'
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>

                <label>
                    <span>recipe ingredients: </span>
                    <div className='ingredients'>
                        <input
                            type='text'
                            onChange={e => setNewIngredient(e.target.value)}
                            value={newIngredient}
                        />
                        <button className='btn' onClick={handleAdd}>add</button>
                    </div>
                </label>
                <p>current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

                <label>
                    <span>recipe method: </span>
                    <textarea
                        onChange={e => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>

                <label>
                    <span>cooking time(m): </span>
                    <input
                        type='number'
                        onChange={e => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>

                <button className='btn'>submit</button>
            </form>
        </div>
    )
}

export default Create