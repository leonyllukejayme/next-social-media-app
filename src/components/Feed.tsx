import Post from "./Post";

const Feed = () => {
    return (
        <div className="flex flex-col gap-4">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default Feed;