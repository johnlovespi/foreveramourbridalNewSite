(function() {
  'use strict';

angular.module('CollectionImageGallery', ['DesignerService', 'DesignerValue'])

.controller("CollectionImageGalleryController", function(DesignerListFactory, $location, $anchorScroll, PaginateDesigner, CollectionArray, designersNameArray) {

	var self = this;
	self.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   	}

	self.scrollToDesigner = function() {
     var newHash = "des" + self.designerId;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash("des" + self.designerId);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
   	}

   	self.styles;
   	self.designerNames = designersNameArray
   	self.setValueArrays = true;
   	self.designerList;
   	self.designersArray;
   	self.setArray = function(){
		if(self.setValueArrays === true) {
			self.designersArray = new DesignerListFactory(CollectionArray);
			self.designerList = self.designersArray.removeJude();
			// console.log(self.designerList);

		}
	};

	self.setArray();
   	// self.mainCollection = CollectionArray;
   	// self.justJude = JudeArray;
	self.imageToBeViewed = false;
	self.designerFullImages;
	self.designerImages;
	self.mainHtml = true;
	self.selectedImage;
	self.clickedThumbNail = false;
	self.current_page = 1;
	self.records_per_page = 9;
	self.numPages;
	self.displayPages;
	self.currentDesigner;
	self.designerId;
	self.notJude = false;
	self.yesJude = true;
	self.designerName = "Jude Jowilson";
	self.galleryDesignerName;
	self.viewGallery = function(designer, page, judeOrNot) {
			if(judeOrNot) {
				self.setValueArrays = false;
				self.designersArray = new DesignerListFactory(CollectionArray);
				self.designerList = self.designersArray.justJude();
			}
		self.galleryDesignerName = designer;
		console.log(self.galleryDesignerName);
		self.designerFullImages = self.designersArray.viewDesignerGallery(designer);
		self.designerImages = PaginateDesigner.PaginateDesignerFunction(designer, page);
		self.paged = page;
		self.currentDesigner = designer;
		self.numPages = Math.ceil(self.designerFullImages.length / self.records_per_page);
		self.imageToBeViewed = true;
		self.mainHtml = false;
		self.designerId = designer;
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

	self.prevPage = function(designer, array) {
		self.thisDesigner = designer;
	    if (self.current_page > 1) {
	        self.current_page--;
	        self.designerImages = PaginateDesigner.PaginateDesignerFunction(designer, self.current_page, array);
	    }
	}

	self.nextPage = function(designer, array) {
		self.thisDesigner = designer;
	    if (self.current_page < self.numPages) {
	        self.current_page++;
	        self.designerImages = PaginateDesigner.PaginateDesignerFunction(designer, self.current_page, array);
	    }
	}

})



})();