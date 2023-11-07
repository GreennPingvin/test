const twoSum = (nums, target) => {
  const map = new Map();

  for (let k = 0; k < nums.length; k++) {
    const cur = nums[k];
    const x = target - cur;
    if (map.has(x)) {
      return [map.get(x), k];
    }
    map.set(cur, k);
  }
  return null;
};
