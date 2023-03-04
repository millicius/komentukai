'use client'

import { useState, useEffect, Key } from 'react'
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import { db} from '../firebase'

function Comments() {

    const [comments, setComments] = useState<any>([])

    useEffect(() => {
        const collRef = collection(db, "comments")
        const q = query(collRef, orderBy('createdAt', 'desc'))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setComments(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        })
        return unsubscribe
    }, [])
  return (
    <main>
        <div>{comments.map((comment: { id: Key, name: string, text: string }) => {
        return (
            <div key={comment.id}>{comment.name}{comment.text}</div>
        )
    })}</div>
    </main>
  )
}

export default Comments