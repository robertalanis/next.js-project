import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Loader from "../components/Loader";

import toast from 'react-hot-toast';

export default function Home() {
	return (
		<div>
			<button onClick={() => toast.success('hello toast!')}>
				Toast Me
			</button>
			<Loader show />
			{/* <Link prefetch={false} href ={{
      pathname: '/[username]',
      query: {username: 'rxa59'},
    }}>
      <a>Robert's Profile</a>
    </Link> */}
		</div>
	);
}
