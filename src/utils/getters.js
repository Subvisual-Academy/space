import { GET } from "../utils/fetch";

export async function getAnswers(user_id) {
    return await GET(`users/${user_id}/answers`);
};
  
export async function getSkills(user_id) {
    var response = await GET(`users/${user_id}/skills`);
    console.log("Skills API Response:", response);
    return response.map((skill) => skill["name"]);
};

export async function getHobbies(user_id) {
    var response = await GET(`users/${user_id}/hobbies`);
    console.log("Hobbies API Response:", response);
    return response.map((hobby) => hobby["name"]);
};

export async function getUserData(user_id) {
    var userData = await GET(`users/${user_id}`);
    return userData;
};

export async function getQuestion(question_id) {
    return await GET(`questions/${question_id}`);
};