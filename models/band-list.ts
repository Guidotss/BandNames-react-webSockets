import { Band } from "./band";

export class BandList {
  private bands: Band[];
  constructor() {
    this.bands = [
      new Band("Metallica"),
      new Band("Queen"),
      new Band("Heroes del Silencio"),
      new Band("Bon Jovi"),
    ];
  }

  public addBand(name: string): Band[] {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return this.bands;
  }

  public removeBand(id: string): void {
    this.bands = this.bands.filter((band) => band.id !== id);
  }

  public getBands(): Band[] {
    return this.bands;
  }

  public increaseVotes(id: string): void {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.votes += 1;
      }
      return band;
    });
  }

  public changeName(id: string, newName: string): void {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.name = newName;
      }
      return band;
    });
  }
}
