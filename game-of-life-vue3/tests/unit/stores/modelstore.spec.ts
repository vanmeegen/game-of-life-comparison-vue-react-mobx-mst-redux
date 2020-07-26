import {ModelStore} from "../../../src/stores/ModelStore";

describe("the model store", () => {

  let modelStore: ModelStore;
  beforeEach(() => {
    modelStore = new ModelStore();
  });

  describe("it manages the cell correctly", () => {
        it("sets one life if set is called with true", () => {
          modelStore.accept({type: "set", payload: {x: 0, y: 0, value: true}});
          expect(modelStore.cell(0, 0)).toEqual(true);
        });
        it("resets one life if set is called with false", () => {
          modelStore.accept({type: "set", payload: {x: 0, y: 0, value: true}});
          modelStore.accept({type: "set", payload: {x: 0, y: 0, value: false}});
          expect(modelStore.cell(0, 0)).toEqual(false);
        });
    it("updates all neighbor counts if one life is set", () => {
      expect(modelStore.neighborCount(0, 0)).toEqual(0);
      modelStore.accept({type: "set", payload: {x: 1, y: 1, value: true}});
      expect(modelStore.neighborCount(0, 0)).toEqual(1);
      expect(modelStore.neighborCount(1, 0)).toEqual(1);
      expect(modelStore.neighborCount(2, 0)).toEqual(1);
      expect(modelStore.neighborCount(0, 1)).toEqual(1);
      expect(modelStore.neighborCount(1, 1)).toEqual(0);
      expect(modelStore.neighborCount(2, 1)).toEqual(1);
      expect(modelStore.neighborCount(0, 2)).toEqual(1);
      expect(modelStore.neighborCount(1, 2)).toEqual(1);
      expect(modelStore.neighborCount(2, 2)).toEqual(1);
    });
    it("updates all neighbor counts if one life is reset", () => {
      modelStore.accept({type: "set", payload: {x: 1, y: 1, value: true}});
      modelStore.accept({type: "set", payload: {x: 1, y: 1, value: false}});
      expect(modelStore.neighborCount(0, 0)).toEqual(0);
      expect(modelStore.neighborCount(1, 0)).toEqual(0);
      expect(modelStore.neighborCount(2, 0)).toEqual(0);
      expect(modelStore.neighborCount(0, 1)).toEqual(0);
      expect(modelStore.neighborCount(1, 1)).toEqual(0);
      expect(modelStore.neighborCount(2, 1)).toEqual(0);
      expect(modelStore.neighborCount(0, 2)).toEqual(0);
      expect(modelStore.neighborCount(1, 2)).toEqual(0);
      expect(modelStore.neighborCount(2, 2)).toEqual(0);
        });
      }
  );

  describe("it calculates game of life rules correctly", () => {
    it("calculates an empty board from an empty board", () => {
      modelStore.accept({type: "next"});
      let countAlive: number = 0;
      let countNeighbors: number = 0;
      for (let x = 0; x < modelStore.board.maxX; x++) {
        for (let y = 0; y < modelStore.board.maxY; y++) {
          const cell = modelStore.cell(x, y);
          if (cell) {
            countAlive++;
          }
          countNeighbors += modelStore.neighborCount(x, y);
        }
      }
      expect(countAlive).toEqual(0);
      expect(countNeighbors).toEqual(0);
    });
    it("deletes a field with 1 neighbor", () => {
          modelStore.accept({type: "set", payload: {x: 0, y: 0, value: true}});
      modelStore.accept({type: "set", payload: {x: 1, y: 0, value: true}});
          modelStore.accept({type: "next"});
      expect(modelStore.cell(0, 0)).toEqual(false);
      expect(modelStore.cell(1, 0)).toEqual(false);
    });
    it("deletes a field with more than 3 neighbors", () => {
      // field has 4 neighbors
      modelStore.accept({type: "set", payload: {x: 1, y: 0, value: true}});
      modelStore.accept({type: "set", payload: {x: 0, y: 0, value: true}});
      modelStore.accept({type: "set", payload: {x: 2, y: 0, value: true}});
      modelStore.accept({type: "set", payload: {x: 0, y: 1, value: true}});
      modelStore.accept({type: "set", payload: {x: 1, y: 1, value: true}});
      modelStore.accept({type: "next"});
      expect(modelStore.cell(1, 0)).toEqual(false);
    });
    it("creates new life on a field with 3 neighbors", () => {
      // field has 4 neighbors
      modelStore.accept({type: "set", payload: {x: 0, y: 0, value: true}});
      modelStore.accept({type: "set", payload: {x: 2, y: 0, value: true}});
      modelStore.accept({type: "set", payload: {x: 1, y: 1, value: true}});
      modelStore.accept({type: "next"});
      expect(modelStore.cell(1, 0)).toEqual(true);
    });
    it("calculates oscillator --- correctly", () => {
      // field has 4 neighbors
      modelStore.accept({type: "set", payload: {x: 1, y: 1, value: true}});
      modelStore.accept({type: "set", payload: {x: 2, y: 1, value: true}});
      modelStore.accept({type: "set", payload: {x: 3, y: 1, value: true}});
      modelStore.accept({type: "next"});
      expect(modelStore.cell(1, 1)).toEqual(false);
      expect(modelStore.cell(2, 1)).toEqual(true);
      expect(modelStore.cell(3, 1)).toEqual(false);
      expect(modelStore.cell(2, 0)).toEqual(true);
      expect(modelStore.cell(2, 2)).toEqual(true);
    });
      }
  );

});

