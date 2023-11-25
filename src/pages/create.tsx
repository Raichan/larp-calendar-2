import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  eventName: string;
  eventType: "larp" | "convention" | "learning" | "other";
  startDate: Date;
  endDate: Date;
  dateTextField: string;
  signupStart: Date;
  signupEnd: Date;
  locationArea:
    | "south"
    | "southwest"
    | "west"
    | "east"
    | "north"
    | "lapland"
    | "abroad";
  locationName: string;
  iconUrl: string;
  genre:
    | "fantasy"
    | "scifi"
    | "cyberpunk"
    | "steampunk"
    | "postapocalyptic"
    | "history"
    | "thriller"
    | "horror"
    | "realism"
    | "city"
    | "newweird"
    | "action"
    | "drama"
    | "humour";
  cost: string;
  ageLimit: number;
  beginnerFriendly: boolean;
  eventFull: boolean;
  invitationOnly: boolean;
  languageFree: boolean;
  storyDescription: string;
  infoDescription: string;
  organizerName: string;
  organizerEmail: string;
  links: string[];
};

export default function Create() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("eventName")); // watch input value by passing the name of it

  return (
    <form className="create-form" onSubmit={handleSubmit(onSubmit)}>
      *-merkityt kentät ovat pakollisia.
      <div>
        <label>Tapahtuman nimi *</label>
        <input {...(register("eventName"), { required: true })} />

        {errors.eventName && <span>This field is required</span>}
      </div>
      <div>
        <label>Tapahtuman tyyppi</label>
        <select {...register("eventType")}>
          <option value="larp">Larpit</option>
          <option value="convention">Conit ja miitit</option>
          <option value="learning">Kurssit ja työpajat</option>
          <option value="other">Muut</option>
        </select>
      </div>
      <div>
        <label>Päivämäärä(t)</label>
        <input
          placeholder="01/01/2025"
          type="date"
          {...register("startDate")}
        />{" "}
        - <input type="date" {...register("endDate")} />
        <br />
        <input placeholder="Keväällä 2025" {...register("dateTextField")} />
      </div>
      <div>
        <label>Ilmoittautumisaika</label>
        <input type="date" {...register("signupStart")} /> -{" "}
        <input type="date" {...register("signupEnd")} />
      </div>
      <div>
        <label>Sijainti</label>
        <select {...register("locationArea")}>
          <option value="south">Etelä-Suomi</option>
          <option value="southwest">Lounais-Suomi</option>
          <option value="west">Länsi- ja Sisä-Suomi</option>
          <option value="east">Itä-Suomi</option>
          <option value="north">Pohjois-Suomi</option>
          <option value="lapland">Lappi</option>
          <option value="abroad">Ulkomailla</option>
        </select>
        <input {...register("locationName")} />
      </div>
      <div>
        <label>Tapahtumakuva</label>
        <input {...register("iconUrl")} />
      </div>
      <div className="form-checkboxes">
        <label>Genre</label>
        <input type="checkbox" value="fantasy" {...register("genre")} />{" "}
        <label>Fantasia</label>
        <input type="checkbox" value="scifi" {...register("genre")} />{" "}
        <label>Sci-fi</label>
        <input type="checkbox" value="cyberpunk" {...register("genre")} />{" "}
        <label>Cyberpunk</label>
        <input type="checkbox" value="steampunk" {...register("genre")} />{" "}
        <label>Steampunk</label>
        <input
          type="checkbox"
          value="postapocalyptic"
          {...register("genre")}
        />{" "}
        <label>Post-apokalyptinen</label>
        <input type="checkbox" value="history" {...register("genre")} />{" "}
        <label>Historiallinen</label>
        <input type="checkbox" value="thriller" {...register("genre")} />{" "}
        <label>Jännitys</label>
        <input type="checkbox" value="horror" {...register("genre")} />{" "}
        <label>Kauhu</label>
        <input type="checkbox" value="realism" {...register("genre")} />{" "}
        <label>Realismi</label>
        <input type="checkbox" value="city" {...register("genre")} />{" "}
        <label>Kaupunkipeli</label>
        <input type="checkbox" value="newweird" {...register("genre")} />{" "}
        <label>Uuskumma</label>
        <input type="checkbox" value="action" {...register("genre")} />{" "}
        <label>Toiminta</label>
        <input type="checkbox" value="drama" {...register("genre")} />{" "}
        <label>Draama</label>
        <input type="checkbox" value="humour" {...register("genre")} />{" "}
        <label>Huumori</label>
      </div>
      <div>
        <label>Osallistumismaksu</label>
        <input {...register("cost")} />
      </div>
      <div>
        <label>Ikäraja</label>
        <input {...register("ageLimit")} />
      </div>
      <div className="form-checkboxes">
        <input type="checkbox" {...register("beginnerFriendly")} />
        <label>Aloittelijaystävällinen</label>
        <br />
        <input type="checkbox" {...register("eventFull")} />
        <label>Tapahtuma on täynnä</label>
        <br />
        <input type="checkbox" {...register("invitationOnly")} />
        <label>Kutsupeli</label>
        <br />
        <input type="checkbox" {...register("languageFree")} />
        <label>Kielivapaa tapahtuma</label>
        <br />
      </div>
      <div>
        <label>Tarinallinen kuvaus</label>
        <input {...register("storyDescription")} />
      </div>
      <div>
        <label>Infokuvaus</label>
        <input {...register("infoDescription")} />
      </div>
      <div>
        <label>Järjestäjän nimi</label>
        <input {...register("organizerName")} />
      </div>
      <div>
        <label>Järjestäjän sähköpostiosoite</label>
        <input {...register("organizerEmail")} />
      </div>
      <div>
        <label>Verkkosivu</label>
        <input {...register("links")} />
      </div>
      <input type="submit" />
    </form>
  );
}
