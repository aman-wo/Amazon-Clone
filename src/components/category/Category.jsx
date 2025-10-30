import React from 'react'
import {categoryInfos} from './categoryFullinfos'
import CategoryCard from './CategoryCard'
import classes from './category.module.css'
const Category = () => {
  return (
    <>
     <section className={classes.category_container}>
        {
            categoryInfos.map((infos)=>{
             return <CategoryCard key={infos.name} data={infos} />;
            })
        }
        </section> 
    </>
  )
}

export default Category
