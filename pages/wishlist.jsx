import { Heading, Image } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, Tbody, Td ,Tr,Thead,Th, Button} from '@chakra-ui/react'

 const WishList = () => {
    const [movie,setMovie]=useState([])
    const getMovie=async()=>{
        let res = await axios.get(`http://localhost:3004/wishlist`)
        setMovie(res.data)
    }
    const handleRemove=async(id)=>{
     let res= await axios.delete(`http://localhost:3004/wishlist/${id}`)
     getMovie()
    }
    useEffect(()=>{
        getMovie()
    },[])
  return (
    <div>
        <Heading style={{textAlign:'center',marginBottom:'20px',marginTop:'20px'}}>WishList</Heading>
        <Table>
        <Thead>
            <Tr>
            <Th>S.No</Th>
            <Th>Poster</Th>
          <Th>Title</Th>
          <Th>Rating</Th>
          <Th>Realease Date</Th>
          <Th>Remove</Th>
            </Tr>
         
        </Thead>
        <Tbody>
          {movie.map(el=><Tr key={el.id}>
            <Td>{el.id}</Td>
            <Td> <Image height={'70px'} width={'70px'} src={el.Images[2]} alt='abc' /> </Td>
            <Td>{el.Title}</Td>
            <Td>{el.imdbRating}</Td>
            <Td>{el.Released}</Td>
            <Td><Button onClick={()=>handleRemove(el.id)}>Remove</Button></Td>
          </Tr>)}
        </Tbody>
      </Table>
    </div>
  )
}
export default WishList;
