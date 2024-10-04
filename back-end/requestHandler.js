import portSchema from "./models/port.model.js"
// import pkg from 'jsonwebtoken'
// const {sign} = pkg
import Portfolio from './models/port.model.js';











export async function addPort(req, res) {
    try {
        // Destructure portfolio details and photo from req.body
        const { portfolio: { num, category, title, description, stack } = {}, photo } = req.body;

        // Log the extracted values for debugging purposes
        console.log("Received portfolio data:", num, category, title, description, stack, photo);

        // Create a new portfolio document in the database
        const newPort = await portSchema.create({
            num,
            category,
            title,
            description,
            stack,
            photo,
        });

        // Send a success response including the created portfolio data
        res.status(201).send({ msg: "Successfully created", data: newPort });
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error creating portfolio entry:", error);

        // Send an error response with an appropriate status and message
        res.status(500).send({ error: error.message || "An error occurred while creating the portfolio entry" });
    }
}




// export async function addPort(req, res) {
//     try {
//       const { contact, photo } = req.body;
//       const { num, category, title, description, stack } = contact || {};
  
//       console.log(num, category, title, description, stack, photo);
  
//       const newPort = await portSchema.create({
//         num,
//         category,
//         title,
//         description,
//         stack,
//         photo,
//       });
  
//       res.status(201).json({ message: 'Port created successfully', port: newPort });
//     } catch (error) {
//       console.error(error);
  
//       if (error.name === 'ValidationError') {
//         res.status(400).json({ error: error.message });
//       } else {
//         res.status(500).json({ error: 'An error occurred while creating the port' });
//       }
//     }
//   }






export async function getPort(req,res){
    try {
        const data=await portSchema.find();
        res.status(200).send(data)
        console.log(data);
    } catch (error) {
        res.status(500).send(error)
    }
}



export async function getforPort(req,res) {
    try {
        const {id}=req.params;
        console.log(id);
        const data = await portSchema.findOne({_id:id})
        console.log(data);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}







// export async function getdataforedit(req,res) {
//     try {
//         const {id}=req.params;
//         console.log(id);
//         const data = await contactsSchema.findOne({_id:id})
//         console.log(data);
//         res.status(200).send(data)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// }












export async function deletePort(req, res) {
    try {
        const { id } = req.params;
        console.log(id);    

      await portSchema.deleteOne({_id:id});
       res.status(200).send({msg:"successfully deleted"})
    } catch (error) {
        console.error(error);
        res.status(400).send({ error});
    }
    
}




export async function updatePort(req,res) {
    try {
        const {id}=req.params;
        console.log(id);
    const {...portfolio}=req.body
    await portSchema.updateOne({_id:id},{$set:{...portfolio}})
        res.status(201).send({msg:"updated"})
    } catch (error) {
        res.status(400).send(error)
    }
}