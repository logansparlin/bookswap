var imageStore = new FS.Store.S3("images", {
	region: "us-west-2",
	accessKeyId: "AKIAJT77SB4KKJJXDKEA",
	secretAccessKey: "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",
	bucket: "ls-bookswap",
	ACL: "private", //Optional
	folder: "images"
});

Images = new FS.Collection("images", {
	stores: [imageStore]
})