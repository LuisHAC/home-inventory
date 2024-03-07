// DB PW: p0Nd4D3vP4s5W0rD
// mongodb+srv://pondaDev:p0Nd4D3vP4s5W0rD@cluster0.vf1flcz.mongodb.net/

//mongodb+srv://pondaDev:p0Nd4D3vP4s5W0rD@cluster0.vf1flcz.mongodb.net/?retryWrites=true&w=majority


import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Recipe} from "../domain/recipe";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Result } from '../../lib/typings/Result';



@Injectable({providedIn: 'root'})
export class KitchenService {
  // private dbUrl: string = "mongodb+srv://pondaDev:p0Nd4D3vP4s5W0rD@cluster0.vf1flcz.mongodb.net/?retryWrites=true&w=majority";
  private dbUrl: string = 'http://localhost:4200/assets/recipes/all-recipes.json';
  
  constructor(
    private http: HttpClient) { }
    
  getRecipes(): Observable<Recipe[]> {
    // const recipes= of(Recipe[]);
    return this.http.get<Recipe[]>(this.dbUrl);
  }
}
  
// interface MongoClient {
//   url: string;
//   serverApi: [
//     {version: string; strict: boolean; deprecationErrors: boolean}
//   ]
// }
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://pondaDev:<password>@cluster0.vf1flcz.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
