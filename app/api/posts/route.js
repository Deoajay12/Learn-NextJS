import connectMongo from "../../../utils/connectMango";
import PostModal from "../../../models/postModel";
export async function GET() {

    try{
    await connectMongo();
    const postData = await PostModal.find({});
    return Response.json(postData);
    } catch(error){
        return Response.json({message:error.message})
    }
}