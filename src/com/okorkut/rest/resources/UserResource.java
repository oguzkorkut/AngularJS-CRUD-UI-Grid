package com.okorkut.rest.resources;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;

import com.okorkut.rest.DTO.KullaniciDTO;
import com.okorkut.rest.service.IUserService;

@Path("/user/")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UserResource {

	@Autowired
	public IUserService userService;

	public UserResource() {
	}

	@GET
	@Path("/getKullaniciById")
	public KullaniciDTO getKullaniciById(@QueryParam("id") int id) {

		System.out.println("Sorgulanacak Kullanici Id:" + id);

		KullaniciDTO kullaniciDTO = userService.getKullaniciById(id);

		return kullaniciDTO;
	}

	@POST
	@Path("/kaydet")
	public int kaydet(KullaniciDTO kullaniciDTO) {

		int id = userService.kaydet(kullaniciDTO);

		System.out.println("Kaydedilen Kullanici Id:" + id);

		return id;
	}

	@PUT
	@Path("/guncelle")
	public KullaniciDTO guncelle(KullaniciDTO kullaniciDTO) {

		KullaniciDTO dto = userService.guncelle(kullaniciDTO);

		return dto;
	}

	@DELETE
	@Path("/sil/{id}")
	public boolean guncelle(@PathParam("id") int id) {

		System.out.println("Silinece Kullanici Id:" + id);

		boolean control = userService.sil(id);

		return control;
	}

	@GET
	@Path("/getKullanicilar")
	public List<KullaniciDTO> getKullanicilar() {

		List<KullaniciDTO> dtos = userService.getKullanicilar();

		return dtos;
	}

}
