import Notes from "../../components/Notes";

const Home = () => {
    return (
        <div>
            <h1 style={{ marginBottom: "1rem" }}>Home</h1>
            <p>
                Keep track of your{" "}
                <span style={{ color: "#E7A41E", fontWeight: "450" }}>
                    LeetCode
                </span>{" "}
                progress and write down helpful notes to help you remember and
                better understand problems!
            </p>

            <Notes />
        </div>
    );
};

export default Home;
