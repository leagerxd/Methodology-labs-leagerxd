const ArrayList = require('../src/ArrayList');

describe('List based on array', () => {
  let ArrayListBased;

  beforeAll(() => {
    ArrayListBased = new ArrayList(); // Instantiate the ArrayList class
  });

  it('append one node', () => {
    ArrayListBased.append('a');
    expect(ArrayListBased.get(0)).toBe('a');
  });

  it('check length', () => {
    ArrayListBased.append('b');
    expect(ArrayListBased.getLength()).toBe(2);
  });

  it('clear the list', () => {
    ArrayListBased.clear();
    expect(ArrayListBased.getLength()).toBe(0);
  });

  it('getting first node by value', () => {
    ArrayListBased.append('a');
    ArrayListBased.append('b');
    ArrayListBased.append('b');
    ArrayListBased.append('b');

    expect(ArrayListBased.findFirst('b')).toBe(1);
    expect(ArrayListBased.findFirst('c')).toBe(-1);
  });

  it('getting last node by value', () => {
    expect(ArrayListBased.findLast('b')).toBe(3);
    expect(ArrayListBased.findLast('c')).toBe(-1);
  });

  it('getting node by index', () => {
    expect(ArrayListBased.get(0)).toBe('a');
    expect(ArrayListBased.get(1)).toBe('b');
  });

  it('inserting node to the list', () => {
    ArrayListBased.insert('g', 1);
    expect(ArrayListBased.get(1)).toBe('g');
  });

  it('deleting node by index', () => {
    const deleted = ArrayListBased.delete(1);
    expect(deleted).toBe('g');
    expect(ArrayListBased.findFirst('g')).toBe(-1);
    expect(ArrayListBased.getLength()).toBe(4);
  });

  it('delete all nodes with the same value', () => {
    ArrayListBased.append('g');
    ArrayListBased.append('g');
    ArrayListBased.append('g');
    expect(ArrayListBased.getLength()).toBe(7);
    ArrayListBased.deleteAll('g');
    expect(ArrayListBased.findFirst('g')).toBe(-1);
  });

  it('cloning the list', () => {
    const newList = ArrayListBased.clone();

    expect(newList.get(0)).toBe(ArrayListBased.get(0));
  });

  it('checking is this real clone', () => {
    const newList = ArrayListBased.clone();
    newList.append('n');

    expect(ArrayListBased.findFirst('n')).toBe(-1);
  });

  it('reversing the list', () => {
    ArrayListBased.clear();
    ArrayListBased.append('c');
    ArrayListBased.append('b');
    ArrayListBased.append('a');

    ArrayListBased.reverse();

    expect(ArrayListBased.get(0)).toBe('a');
    expect(ArrayListBased.get(2)).toBe('c');
  });

  it('extending the list', () => {
    const secondList = ArrayListBased.clone();
    expect(secondList.getLength()).toBe(3);
    ArrayListBased.extend(secondList);
    expect(ArrayListBased.getLength()).toBe(6);
    secondList.append('n');
    expect(secondList.getLength()).toBe(4);
    expect(ArrayListBased.getLength()).toBe(6);
  });
});