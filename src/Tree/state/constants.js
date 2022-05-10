const createActionTypes = (name) => {
  return {
    CREATE: `${name}_CREATE`,
    EDIT: `${name}_EDIT`,
    DELETE: `${name}_DELETE`,
  };
};

const VALUE = createActionTypes("VALUE");
const FILE = createActionTypes("FILE");
const FOLDER = createActionTypes("FOLDER");

export { VALUE , FILE, FOLDER };
