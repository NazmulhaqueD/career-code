export const myPostedJobsPromise = (email) => {
    console.log(email)
    return fetch(`http://localhost:5000/jobs?email=${email}`).then(res => res.json());
}