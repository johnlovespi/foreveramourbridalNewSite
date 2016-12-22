
import java.util.ArrayList;
public class ImageFilterManager
{
	private ArrayList<ImageFilter>images= new ArrayList<ImageFilter>();

	public ImageFilterManager()
	{

	}

	public void addImages(ImageFilter image)
	{
		images.add(image);
	}


	public ImageFilter searchByDesignerName(String designerName)
	{
		for(int i=0;i<images.size(); i++)
		{
			if(images.get(i).getDesignerName().equalsIgnoreCase(designerName))
			{
				return images.get(i);
			}
			
		}
		return null;
	}
	
	
	public void searchEmbeddedDesignerArray(String designerNameKey, String style)
	{
		
		for(int i=0;i<images.size(); i++)
		{
			if(images.get(i).getDesignerName().equalsIgnoreCase(designerNameKey))
			{
				String[] arraytemp = images.get(i).getStyle();
				int counter=0;
				for(int j=0;j<arraytemp.length;j++)
				{
					if(designerNameKey.equalsIgnoreCase(arraytemp[counter]))
					   {
						   System.out.println("There was a match.");
						   System.out.println(arraytemp[counter]);
						   break;
					   }
					   else
					   counter++;
				}
				//return images.get(i);
			}
			
		}
		//return null;

	}
}
