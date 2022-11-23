import { GithubUser } from "./github-user.interface";

export interface GithubUsersResponse {
    totalCount:        number;
    incompleteResults: boolean;
    items:             GithubUser[];
}
