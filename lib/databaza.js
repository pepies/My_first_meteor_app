Fakulty = new Mongo.Collection("fakulty");

Files = new FS.Collection("uploaded_files", {
  stores: [new FS.Store.FileSystem("uploaded_files", {path: "~/uploads"})]
});