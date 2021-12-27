// My answer
// async action here is useless. We have to do a map and call promise.all.

const publishItems = async () => {
  const itemsToPublish = ["foo", "bar", "baz", "boo", "quux"];
  itemsToPublish.forEach(async (item) => {
    await asyncPublisher.publish(item);
  });
};

publishItems().catch((e) => {
  throw new Error("Failed to publish items!");
});
