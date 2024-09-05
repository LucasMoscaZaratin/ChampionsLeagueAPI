import * as HttpResponse from "../utils/http-helper";
import * as CLubRepository from "../repositories/clubs-repository";

export const getClubService = async () => {
  const data = await CLubRepository.findAllClubs();
  const response = HttpResponse.ok(data);
  return response;
};
