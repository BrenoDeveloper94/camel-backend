import app from './server/server'
import express from 'express'
import PostRoute from './users/controller/PostRoute'
import GetRoute from './users/controller/GetRoute'
import UpdateRoute from './users/controller/UpdateRoute'
import RemoveRoute from './users/controller/RemoveRoute'

app.use(express.json())
app.use(PostRoute)
app.use(GetRoute)
app.use(UpdateRoute)
app.use(RemoveRoute)



