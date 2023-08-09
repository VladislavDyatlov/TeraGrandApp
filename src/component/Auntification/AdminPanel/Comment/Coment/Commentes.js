import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {db} from '../../../../../firebase'
import {doc, collection , onSnapshot, addDoc} from "firebase/firestore";
import CircularProgress from '@mui/material/CircularProgress';


export const Commentes = () =>{

    const params = useParams()
    const [info, setInfo] = useState()
    const prodId = params.id
    const document = doc(db, "Comments", `${prodId}`)

    useEffect(() =>{
    onSnapshot(document, (doc) => {
        setInfo({...doc._document.data.value.mapValue.fields})
    })
    }, [])

    return(
        <div>
            {info === undefined
             ?
             <CircularProgress color="success" />
            :
            <div>
                <div>
                    {info.Text.stringValue}
                </div>
            </div>
            }
        </div>
    )
}