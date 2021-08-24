import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SongForm = ({ handleSearch }) => {
  const classes = useStyles();
  const [form, setForm] = React.useState({
    artista: "",
    cancion: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artista || !form.cancion) {
      alert("Datos Incompletos");
      return;
    }
    handleSearch(form);

    setForm({ artista: "", cancion: "" });
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
      type="text"
        id="artista"
        name="artista"
        label="Ingrese artista"
        onChange={handleChange}
        value={form.artista}
        placeholder="Ingrese artista"
        multiline
      />
      <TextField
       type="text"
        id="cancion"
        name="cancion"
        label="Ingresa cancion"
        onChange={handleChange}
        value={form.cancion}
        placeholder="Ingrese cancion"
        multiline
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default SongForm;
