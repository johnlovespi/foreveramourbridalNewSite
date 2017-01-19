(function() {
  'use strict';

angular.module('CollectionImageGallery', ['DesignerService', 'DesignerValue'])

.controller("CollectionImageGalleryController", function(DesignerListFactory, $location, $anchorScroll, PaginateDesigner, CollectionArray, featuresNameArray, exclusiveNameArray) {

	var self = this;
	self.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   	}

	self.scrollToDesigner = function() {
     var newHash = "des" + self.designerId;
      if ($location.hash() !== newHash) {
        $location.hash("des" + self.designerId);
      } else {
        $anchorScroll();
      }
   	}

   	self.styles;
   	self.featureDesignerNames = featuresNameArray;
   	self.exclusiveDesignerNames = exclusiveNameArray;
   	self.setValueArrays = true;
   	self.featureDesignerList;
   	self.exclusiveDesignerList;
   	self.designersArray;
   	self.setArray = function(){
		if(self.setValueArrays === true) {
			self.designersArray = new DesignerListFactory(CollectionArray);
			self.featureDesignerList = self.designersArray.onlyFeature();
			self.exclusiveDesignerList = self.designersArray.onlyExclusive();

		}
	};

	self.setArray();
	self.viewFeatured = false;
	self.viewExclusive = false;
	self.mainHtml = true;
	self.selectedImage;
	self.clickedThumbNail = false;
	self.feature_page = 1;
	self.exclusive_page = 1;
	self.records_per_page = 9;
	self.featureDesigner;
	self.exclusiveDesigner;
	self.featureDesignerName;
	self.exclusiveDesignerName;
	self.featureSelected = "feature";
	self.exclusiveSelected = "exclusive";
	self.viewGallery = function(designer, page, featureOrExclusive) {
		if(featureOrExclusive === "feature"){
			self.viewFeatured = true;
			self.featureImages = PaginateDesigner.PaginateDesignerFunction(designer, page);
			self.featureDesignerName = designer;
			self.featureFullImages = self.designersArray.viewDesignerGallery(designer);
			self.featurePages = Math.ceil(self.featureFullImages.length / self.records_per_page);
			self.featureDesigner = designer;

		} else if (featureOrExclusive === "exclusive"){
			self.viewExclusive = true;
			self.exclusiveImages = PaginateDesigner.PaginateDesignerFunction(designer, page);
			self.exclusiveDesignerName = designer;
			self.exclusiveFullImages = self.designersArray.viewDesignerGallery(designer);
			self.exclusivePages = Math.ceil(self.exclusiveFullImages.length / self.records_per_page);
			self.exclusiveDesigner = designer;
		}
		self.imageToBeViewed = true;
		self.mainHtml = false;
	};

	self.closeDesignerImageGallery = function(designer) {
		self.mainHtml = true;
		self.imageToBeViewed = false;
		self.clickedThumbNail = false
		self.current_page = 1;
		self.designerFullImages;
		self.numPages;
	   	self.scrollToDesigner();
	};

	self.viewLargeImage = function(image) {
		self.selectedImage = image;
		self.imageToBeViewed = false;
		self.clickedThumbNail = true;
	}

	self.closeDesignerImageGallerySelectedImage = function() {
		self.clickedThumbNail = false;
		self.imageToBeViewed = true;
	}

	self.prevPage = function(featureOrExclusive, designer, array) {
		if(featureOrExclusive === "feature"){
		    if (self.feature_page > 1) {
		        self.feature_page--;
		        self.featureImages = PaginateDesigner.PaginateDesignerFunction(designer, self.feature_page, array);
		    }

		} else if (featureOrExclusive === "exclusive"){
			if (self.exclusive_page > 1) {
		        self.exclusive_page--;
		        self.exclusiveImages = PaginateDesigner.PaginateDesignerFunction(designer, self.exclusive_page, array);
		    }
		}
		self.thisDesigner = designer;

	}

	self.nextPage = function(featureOrExclusive, designer, array) {
		self.thisDesigner = designer;
	    if(featureOrExclusive === "feature"){
		    if (self.feature_page < self.featurePages) {
		        self.feature_page++;
		        self.featureImages = PaginateDesigner.PaginateDesignerFunction(designer, self.feature_page, array);
		    }

		} else if (featureOrExclusive === "exclusive"){
			if (self.exclusive_page < self.exclusivePages) {
		        self.exclusive_page++;
		        self.exclusiveImages = PaginateDesigner.PaginateDesignerFunction(designer, self.exclusive_page, array);
		    }
		}
	}

})



})();