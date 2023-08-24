import Notes from "../../components/Notes";

const Home = () => {
    return (
        <div>
            <h1 style={{ marginBottom: "1rem" }}>Home</h1>
            <p>
                Keep track of your{" "}
                <span style={{ color: "#E7A41E", fontWeight: "450" }}>
                    Notes!
                </span>{" "}
                What{"`"}ll you write down today? Perhaps some LeetCode notes ;
                {")"}?
            </p>

            <Notes />
        </div>
    );
};

export default Home;
