// https://www.youtube.com/watch?v=fJIsqZmQVZQ
// https://github.com/awsomeCStutorials/chess-game

import { Color, Coords, FENChar} from '../models';

export abstract class Piece{
  protected abstract _FENChar: FENChar;
  protected abstract _directions: Coords[];

  constructor(private _color: Color){

  }

  public get FENChar(): FENChar {
    return this._FENChar;
  }

  public get directions(): Coords[]{
    return this._directions;
  }

  public get color(): Color{
    return this._color;
  }

}
