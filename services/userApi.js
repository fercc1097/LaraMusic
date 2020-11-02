import { post, get } from "../lib/request";

export const createUser = async (
	username,
	first_name,
	last_name,
	email,
	biography,
	password,
	password_confirmation
) => {
	try {
		const response = await post("/api/v1/users/signup/", {
			username,
			first_name,
			last_name,
			email,
			password,
			password_confirmation,
			profile: { biography },
		});
		return response;
	} catch (error) {
		return error.response && error.response.status === 422
			? "Email is already taken."
			: "Unknown error. Please try again";
	}
};

export const getUsers = () => {
	return getData("/users", null);
};

export const getUser = (jwt, id) => {
	return getData(`/users/${id}`, jwt);
};

export const getCurrentUser = (jwt) => {
	return getData("/users/current", jwt);
};

const getData = (endpoint, jwt) => {
	try {
		return get(endpoint, jwt);
	} catch (error) {
		return error;
	}
};
