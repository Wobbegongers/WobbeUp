# Wobbe Up :shark:

![Wobbe Up Logo](client/public/WobbeUp.png)

## Motivation
The problem that we at Wobbegongers have always wrestled with is the issue of communication between people on P2P (person to person) listing sites. Usually communication between two parties is dificult because you usually don't want to provide the other indivudual with your private information and the solution employed by these sites are clunky and sus third party emails. So we would would like to suggest Wobbe Up for all your listing and sale needs. A secure P2P site where communication is direct and instant between parties. Every listing that you create or checkout has an IM box where you as a client or vendor can commuicate directly all organized within the listings you own or visit. With Oauth from trust parties you can feel secure that the people you deal with have been verified and any communication between you and any other party is secure and private with end to end encription. As our CEO likes to say:
> Selling who knows what to God knows who

## Build Status

###### MVP
1. Setup PostgresSQL DB
2. Communitcation between server and DB
3. Communication between client and server
4. Socket IO instant messaging
5. Display listings, individual listing, and IM within individual listing
  
* Setup postgresSQL
  - [x] Creat usertable, listing table
* Communication between server and backend
  - [x] connect to DB with npm pg 
* User CRUD capabilities 
  - [x] Create user
  - [x] Read user
  - [ ] Update user
  - [ ] Delete user
* Listing CRUD capabilities 
  - [x] Create listing
  - [x] Read listing
  - [ ] Update listing
  - [ ] Delete listing
* Communication between server and client
  * Axios request to server
  - [x] Login
  - [x] Signup
  - [x] Send a search request and retirve a listing of result
  - [x] Create a listing
  - [ ] Delete a listing
  - [ ] Update a listing 

* Socket IO instant messaging
  - [x] have the chat box located within indiviual listings
  - [x] set up Socket IO proxy server
  - [x] styling chat box
  - [ ] stress test 
  
###### Stretch
1. Oauth/Athorization 
2. End to end chat encrption
3. Be able to upload imnages from local drive and store in DB
4. Gmap API overlay displaying listings illustrated over a Gmap
5. Testing 
6. Sanitazie variables 
