import styles from "./ssr.module.css";

interface UserData {
    email: string;
    name: {
        first: string;
        last: string;
    };
    picture: {
        large: string;
    }
}

const SSRPage = async () => {
    try {
        const response = await fetch("https://randomuser.me/api/", { cache: "no-store" });
        const data = await response.json();
        const userData: UserData = data.results[0];
        
        return (
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1>Server-Side Rendered Page</h1>
                    <p className={styles.subtitle}>This page is rendered on the server at request time.</p>

                    <div className={styles.userInfo}>
                        <img src={userData.picture.large} alt="User" className={styles.userImage} />
                        <h2 className={styles.userName}>
                            {userData.name.first} {userData.name.last}
                        </h2>
                        
                        <p className={styles.userEmail}>{userData.email}</p>
                    </div>
                </div>
            </div>
        )
    } catch (e) {
        console.log('Something went wrong while fetching the SSR data: ', e);
        return <p>Loading...</p>
    }
}

export default SSRPage;