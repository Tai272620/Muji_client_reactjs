import React from 'react'
import Banner from './Banners/Banner'
import Category from './Categories/Category'
import NewItem from './NewItems/NewItem'
import CategoryEx from '../../../components/CategoryEx'

export default function HomePage() {
    return (
        <div>
            <Banner />
            <Category />
            <NewItem />
        </div>
    )
}
