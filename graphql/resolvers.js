import { people, getMyId } from "./db.js";

const resolvers = {
  Query: {
    people: getMyId,
    person: (_, { id }) => getMyId(id),
  },
};

export default resolvers;
